import { useRouter } from "next/navigation";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const InsufficientCreditModal = () => {
	const router = useRouter();

	return (
		<AlertDialog defaultOpen>
			<AlertDialogContent>
				<AlertDialogHeader>
					<div className="flex-between">
						<p className="p0-16-semibold text-dark-400">Insufficient Credits</p>
						<AlertDialogCancel
							className="border-0 p-0 hover:bg-transparent"
							onClick={() => router.push("/profile")}
						>
							<Image
								src="/assets/icons/close.svg"
								alt="cancel"
								width={24}
								height={24}
							/>
						</AlertDialogCancel>
					</div>

					<Image
						src="/assets/images/stacked-coins.png"
						alt="credit coins"
						width={462}
						height={462}
					/>

					<AlertDialogTitle className="p-24-bold text-dark-600">
						Oops.... Loks like you&#39;ve run out of free credits!
					</AlertDialogTitle>

					<AlertDialogDescription className="p-16-regular py-3">
						But you can buy more credits to continue enjoying our services.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel
						className="button w-full bg-purple-100 text-dark-100"
						onClick={() => router.push("/profile")}
					>
						No, Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						className="button w-full bg-purple-gradient bg-cover"
						onClick={() => router.push("/credits")}
					>
						Yes, proceed
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default InsufficientCreditModal;
