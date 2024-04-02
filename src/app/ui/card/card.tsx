import { HoverEffect } from "../inputs";

export default function CardDisplay() {
    const titles = ["Spotify", "Amazon Music", "Apple Music", "Youtube Music"];
    return (
        <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={titles} />
      </div>
    )
}