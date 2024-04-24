function Contact() {
  return (
    <div class="w-full h-screen container mx-auto  px-4 py-8 flex gap-8 justify-center items-center flex-col">
      <h1 class="text-3xl font-bold text-center">Contact Us</h1>
      <form class="w-full max-w-xl bg-white p-12 mt-4 mb-24">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full pt-3 pb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full pt-3 pb-3 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="email"
            placeholder="Enter your Email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-black text-sm font-bold mb-2" for="message">
            Message
          </label>
          <textarea
            class="input shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
