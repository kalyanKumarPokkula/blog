import aboutsvg from "../assets/aboutsvg.svg";

function About() {
  return (
    <div class="w-full h-screen container mx-auto  px-4 py-8 flex gap-8 justify-center items-center flex-col">
      <h1 class="text-3xl font-bold mb-4 text-center">About Page</h1>
      <div class=" mt-8 mb-24 flex gap-8 justify-center items-center md:flex-row">
        <div class="md:w-1/2">
          <h5 class="text-xl font-bold">Our Mission</h5>
          <p class="text-gray-700 mb-6">
            Our mission is to create a space where individuals from all walks of
            life can come together to explore topics that matter. From
            technology and science to lifestyle and culture, we strive to
            provide diverse and thought-provoking content that sparks
            conversation and fosters understanding.
          </p>
          <h5 class="text-xl font-bold">Our Team</h5>
          <p class="text-gray-700 mb-6">
            Behind every blog post is a dedicated team of writers, editors, and
            contributors who are committed to delivering quality content that
            resonates with our audience. With diverse backgrounds and expertise,
            our team brings a unique perspective to every topic we cover.
          </p>
          <h5 class="text-xl font-bold">Our Values</h5>

          <p class="text-gray-700 mb-6">
            At MindFuel, we believe in authenticity, integrity, and inclusivity.
            We are committed to upholding the highest standards of journalistic
            ethics and ensuring that our content reflects the diversity of
            voices and experiences in our community.
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
  );
}

export default About;
