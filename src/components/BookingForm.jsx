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

  return (
    <BookingFormWrapper clinic={clinic} submitted={submitted} name={form.name}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            {labels.name}
          </label>
          <Input id="name" className="w-full" value={form.name} onChange={(e) => update("name", e.target.value)} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
            {labels.phone}
          </label>
          <Input id="phone" type="tel" className="w-full" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium text-gray-700">
            {labels.service}
          </label>
          <Select value={form.service} onValueChange={(v) => update("service", v)}>
            <SelectTrigger id="service" className="w-full">
              <SelectValue placeholder={labels.selectService} />
            </SelectTrigger>
            <SelectContent>
              {clinic.services.map((s) => (
                <SelectItem key={s.name} value={s.name}>{s.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
        </div>
        <div>
          <label htmlFor="date" className="mb-1 block text-sm font-medium text-gray-700">
            {labels.date}
          </label>
          <Input id="date" type="date" className="w-full" value={form.date} onChange={(e) => update("date", e.target.value)} />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
            {labels.message}
          </label>
          <Textarea id="message" rows={3} className="w-full" value={form.message} onChange={(e) => update("message", e.target.value)} />
        </div>
        <Button type="submit" className="h-12 w-full bg-accent text-white hover:opacity-90">
          {clinic.ui.sections.book.submit}
        </Button>
      </form>
    </BookingFormWrapper>
  )
}
