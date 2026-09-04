export const giftConfig = {
  lovedOneName:
    process.env.NEXT_PUBLIC_LOVED_ONE_NAME || "for loved someone",

  senderName:
    process.env.NEXT_PUBLIC_SENDER_NAME || "someone special",

  musicEnabled:
    process.env.NEXT_PUBLIC_MUSIC_ENABLED !== "false",
};