import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PopUp from "./PopUp";
import axios from "axios";
import io from "socket.io-client";
// import { BASE_URL } from "../API_Gateway";
import BASE_URL from "../API_Gateway";

import Typewriter from "typewriter-effect";

class CustomSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      images: [
        {
          src: "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
          title: "Image 1",
        },
        {
          src: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6PTUJPS75AI6XILXO5S7FGUVEQ.jpg&w=1440",
          title: "Image 2 Title",
        },
      ],
      show: false,
      modalImage: "",
      modalTitle: "",
    };
  }

  async fetchNews() {
    var api = await axios.get(`${BASE_URL}/get-slider-news`).then((res) => {
      console.log("data: ", res.data.sliderNews);
      this.setState({
        images: res.data.sliderNews,
      });
    });
  }

  componentDidMount() {
    this.fetchNews();
    this.socket = io(`${BASE_URL}`);
    this.socket.on("connection", () => {
      console.log("Connected to server");

      // do something after the connection is established
    });

    this.socket.on("new-news", (data) => {
      console.log("socket data: ", data.data.title);
      this.setState({
        show: true,
        modalImage: data.data.image,
        modalTitle: data.data.title,
      });

      setTimeout(() => {
        this.setState({
          show: false,
        });
        this.fetchNews();
      }, 60000);
    });

    this.interval = setInterval(() => {
      const { images, imageIndex } = this.state;
      const newIndex = (imageIndex + 1) % images.length;
      this.setState({ imageIndex: newIndex });
      console.log("kjfdgfds");
    }, 60000); // 60,000 milliseconds = 1 minute
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { images, imageIndex } = this.state;
    const currentImage = images[imageIndex];
    return (
      <>
        <PopUp
          show={this.state.show}
          title={this.state.modalTitle}
          image={this.state.modalImage}
          onHide={() => {
            this.setState({
              show: false,
            });
          }}
        />
        <div className="slider-container">
          <div className="slider-item">
            <img src={currentImage.image} alt={currentImage.title} />
            <h2>{currentImage.title}</h2>
          </div>
        </div>
      </>
    );
  }
}

export default CustomSlider;
