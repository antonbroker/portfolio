<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// gyji zlgn eqqs xoui

require 'vendor/autoload.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') 
{
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($email) || empty($message)) 
    {
        echo "Please fill in all fields.";
    } 
    else 
    {
        $mail = new PHPMailer(true);

        try {

            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true,
                ),
            );
            // Server settings
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'iosifov.a.14@gmail.com';
            $mail->Password = 'gyji zlgn eqqs xoui';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // От кого
            $mail->setFrom($email, $name);
            // Кому
            $mail->addAddress('iosifov.a.14@gmail.com'); // Замените на ваш email

            // Содержание письма
            $mail->isHTML(true);
            $mail->Subject = 'New Form Submission';
            $mail->Body    = "Name: $name\nEmail: $email\nMessage:\n$message";

            $mail->send();
            echo json_encode(['status' => 'success', 'message' => 'Message sent successfully!']);
        } 
        catch (Exception $e) 
        {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}
?>

<?php
header("Content-Type: application/json"); // Устанавливаем заголовок JSON
header("Access-Control-Allow-Origin: *"); // Разрешаем CORS (если страница и сервер на разных портах)

// Настройки подключения к базе данных
$host = 'localhost';
$db = 'portfolio';
$user = 'root';
$password = '';

try 
{
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch (PDOException $e) 
{
    die(json_encode(["error" => "Ошибка подключения к базе данных: " . $e->getMessage()]));
}

// Проверяем, что запрос содержит параметр "page"
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['page'])) 
{
    $page = htmlspecialchars($_GET['page']); // Получаем значение параметра "page"

    // Увеличиваем счётчик просмотров
    $sql = "INSERT INTO views (page, view_count) VALUES (:page, 1)
            ON DUPLICATE KEY UPDATE view_count = view_count + 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['page' => $page]);

    // Получаем текущее количество просмотров
    $sql = "SELECT view_count FROM views WHERE page = :page";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['page' => $page]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    // Возвращаем результат в формате JSON
    echo json_encode(['views' => $result['view_count']]);
    exit;
} 
else 
{
    // Если параметр "page" отсутствует, возвращаем ошибку
    http_response_code(400);
    echo json_encode(['error' => 'Параметр "page" отсутствует']);
    exit;
}
?>

