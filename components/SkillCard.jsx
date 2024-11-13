/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc }) => {
  return (
    <div className="skill-card">
      <figure className="skill-card__figure">
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>

      <div>
        <h3 className="skill-card__label">{label}</h3>
        <p className="skill-card__desc">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

export default SkillCard;
