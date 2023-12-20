'use client'
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";
import {Theme} from "@/shared/const/theme";
import './styles/index.scss'

export default function Home() {
  const {theme,toggleTheme} = useTheme()
  return (
    <main>
    </main>
  )
}
