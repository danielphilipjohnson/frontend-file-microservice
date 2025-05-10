"use client"
import { Link } from 'lucide-react';
import CyberpunkPanel from '@/components/ui/Panel';
import { GlitchText } from '@/components/ui/GlitchText';
import { Button } from '@/components/ui/Button';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';


const NotFoundPage = () => {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-300 font-mono p-6 flex items-center justify-center relative overflow-hidden">
			
			<BackgroundGrid />

			<div className="max-w-2xl mx-auto relative z-10">
				<CyberpunkPanel color="pink" clipPath="polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)">
					<div className="text-center">
						<div className="flex justify-center mb-6">
							<div className="text-9xl font-bold text-pink-500">
								<GlitchText glitchIntensity="high">404</GlitchText>
							</div>
						</div>

						<h1 className="text-3xl text-cyan-400 mb-4 uppercase tracking-wider">
							Connection Lost
						</h1>

						<p className="text-gray-400 mb-6">
							The network pathway you attempted to access does not exist in the current system topology.
							Possible causes include:
						</p>

						<ul className="text-left text-sm text-gray-300 mb-6 max-w-md mx-auto space-y-2">
							<li className="flex items-center">
								<span className="text-pink-500 mr-2">●</span>
								Incorrect network routing
							</li>
							<li className="flex items-center">
								<span className="text-pink-500 mr-2">●</span>
								Temporary system disconnection
							</li>
							<li className="flex items-center">
								<span className="text-pink-500 mr-2">●</span>
								Deleted or relocated resource
							</li>
						</ul>

						<div className="flex justify-center space-x-4">
							<Button
								variant="outline"
								size="lg"
								onClick={() => window.history.back()}
							>
								Return to Previous Network
							</Button>

							<Button
								variant="default"
								size="lg"
								onClick={() => window.location.href = '/'}
							>
								<Link className="mr-2 w-5 h-5" />
								Home Portal
							</Button>
						</div>
					</div>
				</CyberpunkPanel>

				<div className="mt-8 bg-black p-4 border border-gray-800 font-mono text-sm text-green-400">
					<div>
						<span className="text-cyan-400">{'>'}</span> Error Code: 404<br />
						<span className="text-cyan-400">{'>'}</span> Status: Resource Not Found<br />
						<span className="text-cyan-400">{'>'}</span> Recommendation: Check network coordinates<br />
						<span className="text-cyan-400">{'>'}</span>{" "}
						<span className="text-yellow-500">SYSTEM: Redirecting to safe network zone...</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;