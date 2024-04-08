<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\UserRepository;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

#[Route('/api')]
class PhotoController extends AbstractController
{
    #[Route('/photo', name:'photo', methods:["POST"])]
    public function postData(
        Request $request, 
        EntityManagerInterface $entityManager,
        UserRepository $userRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $user = $userRepository->findBy(["username" => "jane_admin"])[0];

        $post = new Post();
        $post->setAuthor($user);
        $post->setTitle("Reporte de Incendio!");
        $post->setSlug("");
        $post->setSummary("");
        $post->setContent($data["comments"]);
        $post->setPublishedAt(new DateTime());
        $post->setImageUrlBase64($data["camera"]);
        
        $entityManager->persist($post);
        $entityManager->flush();

        return new JsonResponse($data);
    }
}
