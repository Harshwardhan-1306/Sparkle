/* 
const cursor = document.querySelector(".cursor");

const color = [
  "#FFD700",
  "#FF8C00",
  "#FF4500",
  "#FB68EE",
  "#FF69B4",
  "#00CED1",
]

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("cursor-trail");

  const color = color[Math.floor(Math.random() * color.length)];
  const size = Math.random() * 15 + 5;
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 50 + 10;

  sparkle.style.backgroundColor = color;
  sparkle.style.boxShadow = `0 0 10px ${color}`;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  sparkle.animate(
    [
      {
        opacity: 1,
        transform: "translate(-50%,-50%) scale(1)"
      },
      {
        opacity: 0,
        transform: `translate(calc(-50% + ${
          Math.cos(angle) * distance
          }px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
    }
  );
  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}
*/

const cursor = document.querySelector(".cursor");

const colors = [
  "#FFD700",
  "#FF8C00", 
  "#FF4500",
  "#FB68EE",
  "#FF69B4",
  "#00CED1",
];

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  
  // Create sparkle on every mouse move (you can throttle this if needed)
  createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("cursor-trail");

  const selectedColor = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 15 + 5;
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 50 + 10;

  // Position the sparkle at mouse coordinates
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
  sparkle.style.backgroundColor = selectedColor;
  sparkle.style.boxShadow = `0 0 10px ${selectedColor}`;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  // Add sparkle to document
  document.body.appendChild(sparkle);

  sparkle.animate(
    [
      {
        opacity: 1,
        transform: "translate(-50%, -50%) scale(1)"
      },
      {
        opacity: 0,
        transform: `translate(calc(-50% + ${
          Math.cos(angle) * distance
        }px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
    }
  );

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}