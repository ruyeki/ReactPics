import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  header: {
    Authorization: "Client-ID 4VW_In-55goOju1_wDUPmyRIZYtpsCVNJoq7OKTBdCg",
  },
});
