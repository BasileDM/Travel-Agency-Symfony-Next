<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ContactController extends AbstractController
{
    #[Route('/api/contact', name: 'app_api_contact')]
    public function index(): Response
    {
        return $this->render('api/contact/index.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }
}
