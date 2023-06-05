export default function Basic() {
  return (
    <svg height={400} width={400}>
      <defs>
        <radialGradient id="myGradient">
          <stop offset="40%" stop-color="red" />
          <stop offset="60%" stop-color="yellow" />
          <stop offset="70%" stop-color="#90EE90" />
          <stop offset="80%" stop-color="blue" />
          <stop offset="100%" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="50" fill="url('#myGradient')" />
      <circle cx="170" cy="100" r="50" fill="url('#myGradient')" />

      <circle cx="135" cy="150" r="50" fill="url('#myGradient')" />
    </svg>
  );
}
