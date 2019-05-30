import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 44cae61303295242796c24cd51689ca1d1ec4d658f32c9a62134753888bb7161"
  }
});
