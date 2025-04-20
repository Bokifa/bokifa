import Image from 'next/image';

export default function Loading() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Image src={'/bokifa-kogo.webp'}  alt={'Loading...'} width={144} height={36} />
		</div>
	);

}