export const BackgroundGrid = () => {
	return (
		<div className="absolute inset-0 z-0 pointer-events-none opacity-10">
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.2) 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>
		</div>
)}