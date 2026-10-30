import React, { useState } from 'react';
import { Check, Loader2, Send, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ScrollReveal from './ScrollReveal';

const projectTypes = [
  'Patio or walkway',
  'Driveway',
  'Stone wall or steps',
  'Masonry or concrete',
  'Other project',
];

const Reviews = () => {
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const templateParams = {
      from_name: formData.get('name'),
      reply_to: formData.get('email'),
      message: [
        'New customer project review',
        `Project: ${formData.get('project')}`,
        `Rating: ${rating} out of 5 stars`,
        '',
        formData.get('review'),
      ].join('\n'),
    };

    try {
      await emailjs.send(
        'service_khf2lwh',
        'template_szqa804',
        templateParams,
        'GAdIPmJfI0YLSqpcJ'
      );
      setStatus('success');
      event.currentTarget.reset();
      setRating(5);
    } catch (error) {
      console.error('Review submission failure:', error);
      setStatus('error');
      setErrorMessage('We could not send your review just now. Please email we.generalconstructions@gmail.com.');
    }
  };

  return (
    <section id="reviews" className="border-y border-white/5 bg-[#141a20] py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <ScrollReveal>
          <div className="max-w-lg lg:sticky lg:top-32">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">From the people we build for</p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
              Had a project<br />with W.E.?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 md:text-base">
              Your feedback means a lot to our crew. Tell us about the work we completed together, and our team will follow up about sharing your review.
            </p>
            <div className="mt-8 border-l-2 border-sky-400 pl-4 text-xs leading-6 text-slate-400">
              Reviews are checked by our team before they are shared publicly.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="delay-100">
          <form onSubmit={handleSubmit} className="space-y-5 border border-white/10 bg-[#0e1319] p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="review-name" className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">Your name</label>
                <input id="review-name" name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Name" className="w-full border border-white/10 bg-[#171d26] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-sky-400" />
              </div>
              <div className="space-y-2">
                <label htmlFor="review-email" className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">Email address</label>
                <input id="review-email" name="email" type="email" autoComplete="email" required maxLength={150} placeholder="you@example.com" className="w-full border border-white/10 bg-[#171d26] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-sky-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="review-project" className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">What project did we work on?</label>
              <select id="review-project" name="project" required defaultValue="" className="w-full border border-white/10 bg-[#171d26] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-sky-400">
                <option value="" disabled>Select a project type</option>
                {projectTypes.map((project) => <option key={project} value={project}>{project}</option>)}
              </select>
            </div>

            <fieldset>
              <legend className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">Your rating</legend>
              <div className="flex gap-1" role="group" aria-label={`Selected rating: ${rating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-label={`${value} star${value === 1 ? '' : 's'}`}
                    aria-pressed={rating === value}
                    onClick={() => setRating(value)}
                    className="cursor-pointer p-1 text-amber-400 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  >
                    <Star size={24} fill={value <= rating ? 'currentColor' : 'none'} strokeWidth={1.7} />
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="space-y-2">
              <label htmlFor="review-message" className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">Tell us about your experience</label>
              <textarea id="review-message" name="review" rows="5" required maxLength={2000} placeholder="What did you think of the finished project?" className="w-full resize-y border border-white/10 bg-[#171d26] px-4 py-3 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-slate-500 focus:border-sky-400" />
            </div>

            {status === 'success' && (
              <p role="status" className="flex items-start gap-2 text-sm leading-6 text-emerald-300">
                <Check size={18} className="mt-1 shrink-0" /> Thanks for sharing your experience. Our team has received your review.
              </p>
            )}
            {status === 'error' && <p role="alert" className="text-sm leading-6 text-rose-300">{errorMessage}</p>}

            <button type="submit" disabled={status === 'submitting'} className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 bg-sky-400 px-6 text-xs font-extrabold uppercase tracking-[0.15em] text-[#11141a] transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-70 sm:w-auto">
              {status === 'submitting' ? <>Sending review <Loader2 size={15} className="animate-spin" /></> : <>Send your review <Send size={15} /> </>}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reviews;