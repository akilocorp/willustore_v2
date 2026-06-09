import { Badge } from './Button'

export default function SectionHeader({ badge, title, subtitle, center = true, className = '' }) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className={`mb-4 ${center ? 'flex justify-center' : ''}`}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-secondary text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
