import { MailtrapClient } from "mailtrap";
import config from "./index.js";

export const mailtrapClient = new MailtrapClient({
  token: config.mailtrapToken,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Vishal gohil",
};