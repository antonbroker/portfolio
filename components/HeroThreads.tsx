"use client";

/*
 * Adapted from React Bits / Threads by David Haz.
 * Copyright (c) 2026 David Haz. MIT + Commons Clause.
 * https://github.com/DavidHDev/react-bits
 */

import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentShader = `
precision highp float;
uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;
const int u_line_count = 28;
const float u_line_width = 8.0;
const float u_line_blur = 12.0;

float Perlin2D(vec2 P) {
  vec2 Pi = floor(P);
  vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
  vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
  Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
  Pt += vec2(26.0, 161.0).xyxy;
  Pt *= Pt;
  Pt = Pt.xzxz * Pt.yyww;
  vec4 hash_x = fract(Pt * (1.0 / 951.135664));
  vec4 hash_y = fract(Pt * (1.0 / 642.949883));
  vec4 grad_x = hash_x - 0.49999;
  vec4 grad_y = hash_y - 0.49999;
  vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
    * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
  grad_results *= 1.4142135623730950;
  vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
    * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
  vec4 blend2 = vec4(blend, vec2(1.0 - blend));
  return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
  return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, vec2 mouse, float time, float amplitude, float distance) {
  float splitPoint = 0.12 + (perc * 0.34);
  float amplitudeNormal = smoothstep(splitPoint, 0.78, st.x);
  float finalAmplitude = amplitudeNormal * 0.5 * amplitude * (1.0 + (mouse.y - 0.5) * 0.22);
  float timeScaled = time / 10.0 + (mouse.x - 0.5);
  float blur = smoothstep(splitPoint, splitPoint + 0.05, st.x) * perc;
  float xnoise = mix(
    Perlin2D(vec2(timeScaled, st.x + perc) * 2.5),
    Perlin2D(vec2(timeScaled, st.x + timeScaled) * 3.5) / 1.5,
    st.x * 0.3
  );
  float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;
  float lineStart = smoothstep(y + width / 2.0 + u_line_blur * pixel(1.0, iResolution.xy) * blur, y, st.y);
  float lineEnd = smoothstep(y, y - width / 2.0 - u_line_blur * pixel(1.0, iResolution.xy) * blur, st.y);
  return clamp((lineStart - lineEnd) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))), 0.0, 1.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float strength = 1.0;
  for (int i = 0; i < u_line_count; i++) {
    float p = float(i) / float(u_line_count);
    strength *= 1.0 - lineFn(
      uv,
      u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
      p,
      uMouse,
      iTime,
      uAmplitude,
      uDistance
    );
  }
  float value = 1.0 - strength;
  gl_FragColor = vec4(uColor * value, value * 0.92);
}`;

export function HeroThreads() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active = true;
    let teardown = () => undefined;

    const timer = window.setTimeout(async () => {
      const { Renderer, Program, Mesh, Triangle, Color } = await import("ogl");
      if (!active) return;

      const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio || 1, 1.25) });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      container.appendChild(gl.canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new Color(1, 1, 1) },
          uColor: { value: new Color(1, 0.31, 0.16) },
          uAmplitude: { value: 1.35 },
          uDistance: { value: 0.42 },
          uMouse: { value: new Float32Array([0.5, 0.5]) },
        },
      });
      const mesh = new Mesh(gl, { geometry, program });

      const resize = () => {
        const width = Math.max(container.clientWidth, 1);
        const height = Math.max(container.clientHeight, 1);
        renderer.setSize(width, height);
        program.uniforms.iResolution.value.r = gl.canvas.width;
        program.uniforms.iResolution.value.g = gl.canvas.height;
        program.uniforms.iResolution.value.b = gl.canvas.width / gl.canvas.height;
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);
      resize();

      const currentMouse = [0.5, 0.5];
      let targetMouse = [0.5, 0.5];
      const move = (event: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        targetMouse = [
          (event.clientX - rect.left) / rect.width,
          1 - (event.clientY - rect.top) / rect.height,
        ];
      };
      const leave = () => {
        targetMouse = [0.5, 0.5];
      };
      container.addEventListener("pointermove", move);
      container.addEventListener("pointerleave", leave);

      let visible = true;
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      observer.observe(container);

      let frame = 0;
      const update = (time: number) => {
        frame = requestAnimationFrame(update);
        if (!visible || document.hidden) return;
        currentMouse[0] += 0.04 * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += 0.04 * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
        program.uniforms.iTime.value = time * 0.001;
        renderer.render({ scene: mesh });
      };
      frame = requestAnimationFrame(update);

      teardown = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        resizeObserver.disconnect();
        container.removeEventListener("pointermove", move);
        container.removeEventListener("pointerleave", leave);
        if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    }, 120);

    return () => {
      active = false;
      window.clearTimeout(timer);
      teardown();
    };
  }, []);

  return <div className="hero-threads" ref={containerRef} aria-hidden="true" />;
}
