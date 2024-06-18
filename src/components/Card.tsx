import '@/styles/card.css';

export default function Card() {
	return (
		<div className='paper'>
			<div className='card-container'>
				<div className='card-image'>
					<img src='https://images.unsplash.com/photo-1597176874083-193e47324499' />
				</div>
				<div className='card-content paper-spacing-lg gap-md'>
					<div>
						<h1>First Title</h1>
						<h2>Subtitle</h2>
						<h3>Heading</h3>
						<p>paragraph text</p>
						<p className='annotation'>annotation</p>
						<span>
							<a>Link</a>
						</span>
					</div>

					<div className='paper paper-spacing' style={{ flexFlow: 'row wrap' }}>
						<button>Button</button>
						<button>Button</button>
						<button>Button</button>
						<button>Button</button>
						<button>Button</button>
						<button>Button</button>
					</div>

					<div className='paper paper-spacing' style={{ flexFlow: 'row wrap' }}>
						<input placeholder='placeholder' />
						<button>Button</button>
					</div>
				</div>
			</div>
		</div>
	);
}
