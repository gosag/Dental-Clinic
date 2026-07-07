import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BookingFormWrapper } from "./BookingSuccess"

export default function BookingForm({ clinic }) {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", message: "" })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState({})
  const { form: labels } = clinic.ui

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = labels.errors.name
    if (!form.phone.trim()) next.phone = labels.errors.phone
    if (!form.service) next.service = labels.errors.service
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  return (
    <BookingFormWrapper clinic={clinic} submitted={submitted} name={form.name}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
            {labels.name}
            </label>
            <Input
              id="name"
              className={`h-12 w-full rounded-xl border border-slate-200 bg-white transition-all placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/15 ${
                errors.name ? "border-red-500 bg-red-50/60 focus:border-red-500 focus:ring-red-100" : ""
              }`}
              placeholder="e.g., Abebe Kebede"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              onBlur={() => handleBlur("name")}
            />
            {(errors.name || (touched.name && !form.name)) && <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500"><span>⚠</span> {errors.name || labels.errors.name}</p>}
          </div>
          <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
            {labels.phone}
          </label>
          <Input
            id="phone"
            type="tel"
            className={`h-12 w-full rounded-xl border border-slate-200 bg-white transition-all placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/15 ${
              errors.phone ? "border-red-500 bg-red-50/60 focus:border-red-500 focus:ring-red-100" : ""
            }`}
            placeholder="e.g., +251 91 234 5678"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
          />
          {(errors.phone || (touched.phone && !form.phone)) && <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500"><span>⚠</span> {errors.phone || labels.errors.phone}</p>}
          </div>
          <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700">
            {labels.service}
          </label>
          <Select value={form.service} onValueChange={(v) => update("service", v)}>
            <SelectTrigger id="service" className={`h-12 w-full rounded-xl border border-slate-200 bg-white transition-all focus:border-accent focus:ring-2 focus:ring-accent/15 ${
              errors.service ? "border-red-500 bg-red-50/60 focus:border-red-500 focus:ring-red-100" : ""
            }`}>
              <SelectValue placeholder={labels.selectService} />
            </SelectTrigger>
            <SelectContent className="max-h-64 rounded-xl">
              {clinic.services.map((s) => (
                <SelectItem key={s.name} value={s.name} className="cursor-pointer rounded-lg">
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {(errors.service || (touched.service && !form.service)) && <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500"><span>⚠</span> {errors.service || labels.errors.service}</p>}
          </div>
          <div>
          <label htmlFor="date" className="mb-2 block text-sm font-semibold text-slate-700">
            {labels.date}
          </label>
          <Input
            id="date"
            type="date"
            className="h-12 w-full rounded-xl border border-slate-200 bg-white transition-all focus:border-accent focus:ring-2 focus:ring-accent/15"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            onBlur={() => handleBlur("date")}
          />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
            {labels.message}
          </label>
          <Textarea
            id="message"
            rows={3}
            className="min-h-28 w-full resize-none rounded-2xl border border-slate-200 bg-white transition-all placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/15"
            placeholder="Any special notes or requests..."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => handleBlur("message")}
          />
        </div>
        <Button
          type="submit"
          className="h-12 w-full rounded-full bg-linear-to-r from-accent to-accent/80 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
        >
          {clinic.ui.sections.book.submit}
        </Button>
      </form>
    </BookingFormWrapper>
  )
}
