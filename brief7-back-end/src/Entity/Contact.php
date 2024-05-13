<?php

namespace App\Entity;

use App\Repository\ContactRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(['api_contact_new'])]
    private ?string $first_name = null;

    #[ORM\Column(length: 50)]
    #[Groups(['api_contact_new'])]
    private ?string $last_name = null;

    #[ORM\Column(length: 255)]
    #[Groups(['api_contact_new'])]
    private ?string $subject = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['api_contact_new'])]
    private ?string $message = null;

    #[ORM\Column(length: 80)]
    #[Groups(['api_contact_new'])]
    private ?string $mail = null;

    #[ORM\ManyToOne(inversedBy: 'contacts')]
    private ?ReadStatus $status = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->first_name;
    }

    public function setFirstName(string $first_name): static
    {
        $this->first_name = $first_name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->last_name;
    }

    public function setLastName(string $last_name): static
    {
        $this->last_name = $last_name;

        return $this;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): static
    {
        $this->subject = $subject;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): static
    {
        $this->mail = $mail;

        return $this;
    }

    public function getStatus(): ?ReadStatus
    {
        return $this->status;
    }

    public function setStatus(?ReadStatus $status): static
    {
        $this->status = $status;

        return $this;
    }
}
