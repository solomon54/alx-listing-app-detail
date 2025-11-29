const BookingSection: React.FC<{price: number}> = ({price}) => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">&dolar;{price}/night</h3>
            <div className="mt-4">
                <label htmlFor="ch-in"> Check-in</label>
                <input type="text" name="ch-in" id="ch-in"  className="border p-2 w-full mt-2"/>
            </div>

            <div className="mt-4">
                <label htmlFor="ch-out">Check-out</label>
                <input type="text" name="ch-out" id="ch-out" className="border p-2 w-full mt-2"/>
            </div>
            {/* Total Payment */}
            <div className="mt-4">
                <p>Total payment: <strong>{price * 7}</strong></p>
            </div>

            {/* Reserve Button */}
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">Reserve now</button>

        </div>
    );
};

export default BookingSection;