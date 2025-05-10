"use client";

const Monitor = () => {
	return (
		<section className="mt-10 pt-6 border-t border-gray-800 text-sm text-gray-500">
			<div className="flex flex-wrap justify-between items-center">
				<div>
					System Monitoring Dashboard v2.4.7 •{" "}
					{new Date().toLocaleDateString()}
				</div>
				<div className="flex items-center">
					<div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-1"></div>
					<span className="text-cyan-400">
						SECURE CONNECTION ESTABLISHED
					</span>
				</div>
			</div>
		</section>
	)
}

export default Monitor;