interface ContactInfoCardProps {
    icon: string;
    title: string;
    content: string;
}

function ContactInfoCard({ icon, title, content }: ContactInfoCardProps) {
    return (
        <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200 hover:border-brand/50 transition-colors">
            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                </div>
                <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default ContactInfoCard;
