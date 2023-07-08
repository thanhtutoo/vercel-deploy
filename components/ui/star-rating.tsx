import { FC } from "react";
import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  rating?: number;
}

const StarRating: FC<RatingProps> = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating);

  const halfStars = Math.ceil(rating) - fullStars;

  const emptyStars = 5 - fullStars - halfStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        size={19}
        className={"fill-current text-yellow-500"}
        key={`full_${i}`}
      />
    );
  }

  for (let i = 0; i < halfStars; i++) {
    stars.push(
      <StarHalf
        size={19}
        className={"fill-current text-yellow-500"}
        key={`half_${i}`}
        style={{ transform: "scaleX(1)" }}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star size={19} />);
  }

  return (
    <div className="flex" data-cy-info="star">
      <span className="pr-2 text-lg font-semibold text-red-500">{rating}</span>
      <span className="flex pt-1 text-gray-300">{stars}</span>
    </div>
  );
};

export default StarRating;
