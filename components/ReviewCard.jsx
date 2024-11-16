import PropTypes from "prop-types";

const ratings = new Array(5).fill({
  icon: "★", // Using a star symbol for simplicity
  style: { fontVariationSettings: '"Fill" 1' },
});

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="review-card bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="rating-stars flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="star material-symbols-rounded text-yellow-300 text-[18px]"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="subtext text-zinc-400 mb-8">{content}</p>

      <div className="reviewer-info flex items-center gap-2 mt-auto">
        <figure className="img-box">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>
        <div>
          <p>{name}</p>
          <p className="subtext text-xs text-zinc-400 tracking-wider">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
