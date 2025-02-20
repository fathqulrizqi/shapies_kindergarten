export default function ConfirmationMessage() {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <img src="/public/image/logo.png" alt="logo" className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold text-green-600">Thanks for submitting!</h2>
        <p className="text-gray-700">We will get back to you soon.</p>
      </div>
    );
  }
  