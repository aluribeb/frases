import './services.css'
import image1 from '../../assets/project-management.png'
import image2 from '../../assets/service-2.svg'
import image3 from '../../assets/me-customer-service.png'

const data = [
  {
    id: 1,
    image: image1,
    title: "Project Management",
    description:
      "I've made a lot of websites with WordPress, from stores to online academies. I've been involved in two API projects and a Car Access System (StartUp).",
  },
  {
    id: 2,
    image: image2,
    title: "Web Development",
    description:
    <span>
    Coding is my passion. <br />
    My GitHub repositories will just keep growing and my WordPress pages are now on steroids.
  </span>,
  },
  {
    id: 3,
    image: image3,
    title: "Customer Service",
    description:
      <span> My most rewarding job - working directly with clients. <br />I've learned the importance of communication throughout the whole process, from developers to customers.</span>,
  },
];

const Services = () => {
  return (
  <>
  <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>
    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
  </section>
  </>
)
}

export default Services