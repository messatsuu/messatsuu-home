<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BaseController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function indexAction(): Response
    {
        return $this->render('home.html.twig');
    }
    
    #[Route('/blog', name: 'app_blog')]
    public function blogAction(): Response
    {
        return $this->render('blog.html.twig');
    }
}
