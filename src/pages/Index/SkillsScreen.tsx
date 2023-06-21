import { css } from "@emotion/css"
import { useEffect, useState } from "react"
import BulletScreen from "rc-bullets"
import Tag from "@/components/Tag"
import * as api from "@/requests"

const SkillsScreen = () => {
    const [screen, setScreen] = useState<any>(null)
    const [tags, setTags] = useState<string[]>([])

    useEffect(() => {
        setScreen(
            new BulletScreen("#skills-screen", {
                duration: 20,
                trackHeight: 28,
                direction: "reverse",
                pauseOnHover: false,
            })
        )
    }, [setScreen])

    const refreshTags = async () => {
        setTags(await api.listTags())
    }

    useEffect(() => {
        refreshTags()
    }, [setTags])

    // 当screen发生变化执行
    useEffect(() => {
        let tagIdx = 0
        const intervalId = setInterval(() => {
            if (!screen) return
            if (tagIdx >= tags.length) {
                tagIdx = 0
            }
            screen.push(
                <Tag.Item style={{ marginTop: 0, marginRight: 0 }}>
                    {tags[tagIdx]}
                </Tag.Item>
            )
            tagIdx = tagIdx + 1
        }, 2000)
        return () => {
            clearInterval(intervalId)
        }
    }, [screen, tags])

    return (
        <div
            className={css`
                display: none;
                @media (min-width: 1024px) {
                    display: block;
                    padding-right: 70px;
                    height: 116px;
                    margin-right: 100px;
                    margin-right: 120px;
                    margin-top: 20px;
                }
            `}
            id="skills-screen"
        ></div>
    )
}

export default SkillsScreen
