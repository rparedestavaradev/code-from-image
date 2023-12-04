'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

export const Form = ({
    transformUrlToCode
}: {
    transformUrlToCode: (url: string) => void
}) => {
    return ( 
        <form 
            className="flex flex-col gap-10"
            onSubmit={evt => {
            evt.preventDefault();
            const form = evt.currentTarget as HTMLFormElement;
            const url = form.elements.namedItem('url') as HTMLInputElement;
            transformUrlToCode(url.value);
        }}>
            <Label htmlFor="url">Introduce tu URL</Label>
            <Input id="url" type="url" placeholder="https://tu-screenshot/image.jpg" />
            <Button>Generar Código</Button>
        </form>
    )
}