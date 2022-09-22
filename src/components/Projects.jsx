import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import NavHeader from "./NavHeader";

export default function Projects() {

  const cardItems = [{
    image: "EyeTracking.jpeg",
    title: "Design and Implementation of Eye Movement-based PIN Authentication System",
    date: "Aug 2020 - July 2021",
    text: "This project helps increase security by providing a double-layer protection – face detection + entering and identifying gaze-based PINs using a web camera through real-time eye detection and tracking.",
    github: "https://github.com/VibhaSNavale/Eye-Movement-based-PIN-Authentication",
    report: "EyeTracking.pdf"
  },
  {
    image: "FaceRecognition.jpeg",
    title: "Face recognition system using Python (OpenCV)",
    date: "July 2019 - Aug 2019",
    text: "This project allows users to use the face unlock feature to log into the web application & access previous years' question papers. The aim was to create a secure application for professors to access the question papers pool.",
    github: "https://github.com/VibhaSNavale/Face-Recognition",
  },
  {
    image: "ELibrary.png",
    title: "E-library website",
    date: "Nov 2020 - Jan 2021",
    text: "This web application (called 'Bookworm') is developed using HTML, CSS, and JS, and runs on XAMPP. This website allows users to log into it and read books for free. The information about each book is also displayed on their respective cards.",
    github: "https://github.com/VibhaSNavale/E-Library",
    report: "E-Library.pdf"
  },
  {
    image: "EAuction.png",
    title: "E-Auction System",
    date: "Nov 2019 - Dec 2019",
    text: "A web application made using HTML5, CSS, PHP, and MySQL. This project allows users to either sell or place bids on a product. It has an admin login as well.",
    github: "https://github.com/VibhaSNavale/EAuction-System",
    report: "E-Auction.pdf"
  },
  {
    image: "FoodOrderManagement.png",
    title: "Food order management system",
    date: "May 2020",
    text: "This system is used to maintain user records using a hashing indexing technique. It gives an option to insert, delete, and search users' order details.",
    github: "https://github.com/VibhaSNavale/Food-Order-Management-System",
    report: "FoodOrderManagement.pdf"
  }]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1180 },
      items: 3,
      slidesToSlide: 2
    },
    desktopSmallScreen: {
      breakpoint: { max: 1179, min: 775 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 774, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <NavHeader />
      <Carousel
        responsive={responsive}
        swipeable
        className="carousel"
      >
        {
          cardItems.map((item) => {
            return (
              <Card style={{ width: "24rem", margin: "auto" }} className="cardAnimation">
                <Card.Img variant="top" src={require(`../assets/images/${item.image}`)} style={{ maxHeight:  "13rem" }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href={item.github} target="_blank" rel="noreferrer noopener">Github</Card.Link>
                  {item.report &&
                  <Card.Link href={require(`../assets/pdfs/${item.report}`)} target="_blank" rel="noreferrer noopener" style={{float: "right"}}>View Report (PDF)</Card.Link>}
                </Card.Footer>
              </Card>
            )
          })
        }
      </Carousel>
    </div>
  );
}
