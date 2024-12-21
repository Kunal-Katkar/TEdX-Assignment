
import 'react-multi-carousel/lib/styles.css';
import img1 from "../assets/img/avatar-1.png";
import contacts from "../assets/img/contacts.png";
import speaker from "../assets/img/speaker.png"
import location from "../assets/img/location.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
     <div class="card__container">
    <article class="card__article">
        <div class="card__image">
            <img src={img1} alt="image" class="card__img" />
            <div class="card__shadow"></div>
        </div>
        <div class="card__data">
        <h3 class="card__name">Impactful Ideas</h3>
            <p class="card__description">
            We strive to bring forward powerful ideas that challenge the norms and carry the potential to transform lives.
            </p>
            <a href="#" class="card__button">View More</a>
        </div>
    </article>

    <article class="card__article">
        <div class="card__image">
            <img src={contacts} alt="image" class="card__img" />
            <div class="card__shadow"></div>
        </div>
        <div class="card__data">
            <h3 class="card__name">Community Strength</h3>
            <p class="card__description">
            Standing 6000+ strong, our community comprises of curious individuals with an ever increasing appetite for learning.
            </p>
            <a href="#" class="card__button">View More</a>
        </div>
    </article>

    <article class="card__article">
        <div class="card__image">
            <img src={speaker} alt="image" class="card__img" />
            <div class="card__shadow"></div>
        </div>
        <div class="card__data">
            <h3 class="card__name">Legacy</h3>
            <p class="card__description">
            Ranking amongst the top educational institutes in India, our university adds a key ingredient in realising our vision
            </p>
            <a href="#" class="card__button">View More</a>
        </div>
    </article>

    <article class="card__article">
        <div class="card__image">
            <img src={location} class="card__img" />
            <div class="card__shadow"></div>
        </div>
        <div class="card__data">
            <h3 class="card__name">Location</h3>
            <p class="card__description">
            Hugging the Arabian sea along its length, our venue is a welcoming retreat for sparking up conversations about things that matter.
            </p>
            <a href="#" class="card__button">View More</a>
        </div>
    </article>
</div>

    </section>
  )
}
