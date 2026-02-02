import {useState} from "react";


type TestimonialType = {
	name: string;
	feedback: string;
	createdAt: Date;
}

const FeedbackForm = () => {
	const [name, setName] = useState('');
	const [feedback, setFeedback] = useState('');
	const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);

	const addTestimonial = () => {
		setTestimonials(prevState => [...prevState, {
			name,
			feedback,
			createdAt: new Date()
		}]);
		setName('');
		setFeedback('');
	};

	return (
			<div>
				<h3>Оставьте отзыв</h3>
				<div>
					<div>
					<input
							type="text"
							placeholder='Введите ваше имя'
							value={name}
							onChange={(e) => setName(e.target.value)}
					/>
					</div>
					<div>
					<textarea
							style={{
								border: feedback.length > 10 ? '5px solid red' : '5px solid green'
							}}
						placeholder='Напишите ваш отзыв здесь...'
						value={feedback}
						onChange={(e) => setFeedback(e.target.value)}
					/>
						<p>
						{feedback.length} / 10
						</p>
					</div>
					<button type="submit" onClick={addTestimonial}>Отправить</button>
				</div>

				<div>
					{testimonials.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).map((testimonial) => (
							<div key={testimonial.createdAt.getTime()}>
								<h4>{testimonial.name}</h4>
								<p>{testimonial.feedback}</p>
								<p>{testimonial.createdAt.toLocaleString()}</p>
							</div>
					))}
				</div>
			</div>
	);
};

export default FeedbackForm;