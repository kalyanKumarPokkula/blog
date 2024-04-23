import image from "../assets/landingpage.png";
import aboutsvg from "../assets/aboutsvg.svg";
import food from "../assets/food.png";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import travel from "../assets/travel.png";
import blog from "../assets/Blog.png";
import "./Layout.css";

function Layout() {
  return (
    <div>
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

      <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto text-center">
          &copy; 2024 Your Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;
