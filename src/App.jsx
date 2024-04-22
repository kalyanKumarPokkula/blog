import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import image from "./assets/landingpage.png";
import aboutsvg from "./assets/aboutsvg.svg";
import food from "./assets/food.png";
import food1 from "./assets/food1.png";
import food2 from "./assets/food2.png";
import travel from "./assets/travel.png";
import blog from "./assets/Blog.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav class="bg-gray-800 p-4 fixed top-0 w-full z-10">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
          <div class="flex items-center">
            <a href="#" class="text-white text-xl font-bold">
              MindFuel
            </a>
          </div>
          <div class="hidden md:block">
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#blogs"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              blogs
            </a>
            <a
              href="#contact"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Sign In
            </a>
          </div>
          <div class="md:hidden">
            <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Menu
            </button>
          </div>
        </div>
      </nav>
      <div class="w-full h-screen container mx-auto  px-4 py-8 flex gap-8 justify-center items-center md:flex-row">
        <div class="md:w-1/2">
          <h1 class="text-4xl font-bold mb-4">
            Ignite Your Curiosity - Dive Deep into MindFuel's World of Ideas
          </h1>
          <p class="text-gray-700 mb-4">
            Looking for the hottest deals and trendiest products? You've landed
            in the right place! At [Your E-commerce Brand], we're dedicated to
            bringing you the best shopping experience with a wide selection of
            products and unbeatable prices.
          </p>
          <a
            href="#"
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Learn More
          </a>
        </div>
        <div class="md:w-1/2">
          {/* <img src="https://via.placeholder.com/600x400" alt="Image" class="w-full h-auto"> */}
          <img src={blog} alt="img" />
        </div>
      </div>

      <div
        id="about"
        class="flex flex-col items-center w-full max-h-fit container mx-auto"
      >
        <h1 class="text-3xl font-bold mb-4 text-center">About Page</h1>
        <div class=" mt-8 mb-24 flex gap-8 justify-center items-center md:flex-row">
          <div class="md:w-1/2">
            <h5 class="text-xl font-bold">Our Mission</h5>
            <p class="text-gray-700 mb-6">
              Our mission is to create a space where individuals from all walks
              of life can come together to explore topics that matter. From
              technology and science to lifestyle and culture, we strive to
              provide diverse and thought-provoking content that sparks
              conversation and fosters understanding.
            </p>
            <h5 class="text-xl font-bold">Our Team</h5>
            <p class="text-gray-700 mb-6">
              Behind every blog post is a dedicated team of writers, editors,
              and contributors who are committed to delivering quality content
              that resonates with our audience. With diverse backgrounds and
              expertise, our team brings a unique perspective to every topic we
              cover.
            </p>
            <h5 class="text-xl font-bold">Our Values</h5>

            <p class="text-gray-700 mb-6">
              At MindFuel, we believe in authenticity, integrity, and
              inclusivity. We are committed to upholding the highest standards
              of journalistic ethics and ensuring that our content reflects the
              diversity of voices and experiences in our community.
            </p>

            <h5 class="text-xl font-bold">Join Our Community</h5>

            <p class="text-gray-700">
              We invite you to join our growing community of readers and
              contributors. Whether you're a seasoned writer or a passionate
              reader, there's a place for you at MindFuel. Share your thoughts,
              ideas, and feedback, and be a part of the conversation.
            </p>
          </div>
          <div class="md:w-1/2">
            {/* <img src="https://via.placeholder.com/600x400" alt="Image" class="w-full h-auto"> */}
            <img src={aboutsvg} alt="img" />
          </div>
        </div>
      </div>

      <div
        id="blogs"
        class="flex flex-col justify-center items-center w-full h-screen container mx-auto"
      >
        <h1 class="text-3xl font-bold mb-4 text-center">Latest Blog Posts</h1>

        {/* <!-- Blog Post 1 --> */}

        <div class="mt-16 flex gap-8 justify-center items-center">
          <div class="max-w-lg bg-white rounded-lg overflow-hidden shadow-md mb-6">
            {/* <img src="https://via.placeholder.com/600x400" alt="Blog Post Image" class="w-full h-auto"> */}
            <img src={travel} alt="img" class="w-full h-auto" />

            <div class="p-4">
              <h2 class="text-xl font-bold mb-2">
                The reuse revolution will be realised
              </h2>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                class="text-blue-500 font-bold mt-2 inline-block hover:text-blue-700"
              >
                Read More
              </a>
            </div>
          </div>

          <div class="max-w-lg bg-white rounded-lg overflow-hidden shadow-md mb-6">
            {/* <img src={} alt="Blog Post Image" class="w-full h-auto"> */}
            <img src={food2} alt="img" class="w-full h-auto" />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2">
                ‘Music to our ears’: Why retailers are choosing (Dizzie) to go
                to reusable packaging
              </h2>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                class="text-blue-500 font-bold mt-2 inline-block hover:text-blue-700"
              >
                Read More
              </a>
            </div>
          </div>

          <div class="max-w-lg bg-white rounded-lg overflow-hidden shadow-md mb-6">
            {/* <img src={} alt="Blog Post Image" class="w-full h-auto"> */}
            <img src={food1} alt="img" class="w-full h-auto" />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2">
                Dizzie’s online store to close
              </h2>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                class="text-blue-500 font-bold mt-2 inline-block hover:text-blue-700"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        class="flex flex-col items-center w-full min-h-fit container mx-auto"
      >
        <h1 class="text-3xl font-bold text-center">Contact Us</h1>
        <div class="w-6/12 mx-auto mt-10">
          <form class="shadow-2xl bg-white-800 shadow-md rounded px-8 pt-16 pb-16 mb-24">
            <div class="mb-4">
              <label
                class="block text-black  text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="email"
                placeholder="Enter your Email"
              />
              {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"> */}
            </div>
            <div class="mb-4">
              <label
                class="block text-black text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
              {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"> */}
            </div>
            <div class="mb-6">
              <label
                class="block text-black text-sm font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto text-center">
          &copy; 2024 Your Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
