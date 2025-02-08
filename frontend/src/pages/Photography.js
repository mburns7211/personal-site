import { useState, useEffect } from "react";

const Photography = () => {
    const [photos, setPhotos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    const API_URL = "https://0mm3sz7j87.execute-api.us-east-1.amazonaws.com/Prod/get-s3-photos";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setPhotos(data))
            .catch((err) => console.error("Error fetching photos:", err));
    }, []);

    const nextPhoto = () => {
        setRotation(0);
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = () => {
        setRotation(0);
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const rotatePhoto = () => {
        setRotation((prev) => prev + 90);
    };

    if (!photos.length) return <p>Loading photos...</p>;

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Photo Viewer</h2>
            <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].name}
                style={{
                    maxWidth: "500px",
                    maxHeight: "500px",
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 0.3s",
                }}
            />
            <p>{photos[currentIndex].name}</p>
            <div>
                <button onClick={prevPhoto}>Back</button>
                <button onClick={rotatePhoto}>Rotate</button>
                <button onClick={nextPhoto}>Forward</button>
            </div>
        </div>
    );
};

export default Photography;
