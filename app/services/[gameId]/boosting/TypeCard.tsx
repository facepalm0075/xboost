import Link from "next/link"
import Image from "next/image"

function TypeCard() {
  return (
    <div className="item-con mt-10">
            <Link href="./boosting/rank-boost">
              <div className="item-content">
                <Image
                  src="/bg-ai.png"
                  width={300}
                  height={300}
                  alt="card-bg"
                  className="cont-img1"
                />
                <Image
                  src="/AncientRank.png"
                  width={150}
                  height={150}
                  alt="item-image"
                  className="cont-img2"
                />
                <h3>Rank Boost</h3>
                <p>Challenger player will Boost you to your desired rank.</p>
              </div>
            </Link>
          </div>
  )
}

export default TypeCard