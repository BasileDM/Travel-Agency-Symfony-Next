<?php

namespace App\Entity;

use App\Repository\TripRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TripRepository::class)]
class Trip
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['api_trip_all', 'api_trip_show', 'api_reservation_new'])]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(['api_trip_all', 'api_trip_show'])]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['api_trip_all', 'api_trip_show'])]
    private ?string $description = null;

    #[ORM\ManyToOne(inversedBy: 'trips')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $owner = null;

    #[ORM\ManyToOne(inversedBy: 'trips')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['api_trip_all', 'api_trip_show'])]
    private ?Destination $destination = null;

    /**
     * @var Collection<int, Category>
     */
    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'trips')]
    #[Groups(['api_trip_all', 'api_trip_show'])]
    private Collection $category;

    /**
     * @var Collection<int, Reservation>
     */
    #[ORM\OneToMany(targetEntity: Reservation::class, mappedBy: 'trip')]
    private Collection $reservations;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['api_trip_all', 'api_trip_show'])]
    private ?\DateTimeInterface $start_date = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['api_trip_all', 'api_trip_show'])]
    private ?\DateTimeInterface $end_date = null;

    public function __construct()
    {
        $this->category = new ArrayCollection();
        $this->reservations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getOwner(): ?User
    {
        return $this->owner;
    }

    public function setOwner(?User $owner): static
    {
        $this->owner = $owner;

        return $this;
    }

    public function getDestination(): ?Destination
    {
        return $this->destination;
    }

    public function setDestination(?Destination $destination): static
    {
        $this->destination = $destination;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->category->contains($category)) {
            $this->category->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->category->removeElement($category);

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): static
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations->add($reservation);
            $reservation->setTrip($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): static
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getTrip() === $this) {
                $reservation->setTrip(null);
            }
        }

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->start_date;
    }

    public function setStartDate(\DateTimeInterface $start_date): static
    {
        $this->start_date = $start_date;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->end_date;
    }

    public function setEndDate(\DateTimeInterface $end_date): static
    {
        $this->end_date = $end_date;

        return $this;
    }
}
