import type { Feedback } from "../types/feedback";
import emilyAvatar from "../assets/feedback/emily.png";
import johnAvatar from "../assets/feedback/john.png";
import sarahAvatar from "../assets/feedback/sarah.png";
import francheskaAvatar from "../assets/feedback/francheska.png";
import davidAvatar from "../assets/feedback/david.png";

export const feedback: Feedback[] = [
  {
    id: "1",
    name: "Emily Johnson",
    comment:
      "Amazon Food !  The Burger was so fresh and and absolutely delicious",
    rating: 5,
    avatar: emilyAvatar,
  },
  {
    id: "2",
    name: "John Michael",
    comment: "The pizza was amazing and delivered on time",
    rating: 5,
    avatar: johnAvatar,
  },
  {
    id: "3",
    name: "Sarah Lee",
    comment: "Loved the burger patty, very fresh!",
    rating: 4,
    avatar: sarahAvatar,
  },
  {
    id: "4",
    name: "Francheska White",
    comment: "Fast and friendly service",
    rating: 4,
    avatar: francheskaAvatar,
  },
  {
    id: "5",
    name: "David Goth",
    comment: "The pasta was delightful and well-cooked",
    rating: 5,
    avatar: davidAvatar,
  },
];
