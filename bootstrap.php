<?php

if ($_SERVER['REQUEST_URI'] === '/attribution') {
    ob_start();
    require __DIR__ . '/templates/attribution.phtml';
    $content = ob_get_contents();
    ob_end_clean();

    echo json_encode(['body' => $content]);
    exit;
} else {
    require __DIR__ . '/templates/page.phtml';
}
