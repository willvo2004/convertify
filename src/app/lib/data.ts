"use server";

export const fetchPublicSpotifyPlaylist = async (playlistId: string) => {
    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const REDIRECT_URI = process.env.REDIRECT_URI;
}