import React from 'react'
import {DoubleSidedImage } from 'components/shared'
import { Button, Card } from 'components/ui'
const Home = () => {
    return (
        <div className="grid h-full">
            <div
                className="h-[100%] p-10 w-full bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1529900672901-908be5302554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')` }}
            >
                <div>
                    <h3 className="text-white mb-4">The Clover Sports Club</h3>
                    <p className="text-lg text-white opacity-80 max-w-[700px]">
                        Selamat datang di website member futsal kami! Di sini, kami menawarkan pengalaman futsal yang menyenangkan dan penuh semangat untuk para anggota kami.
                    </p>
                </div>
                <div className='mt-10'>
                    <Button
                    >
                        <span>Join bersama kami</span>
                    </Button>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
                <Card onClick={() => { }}>
                    <div className="mb-4 flex justify-center">
                        <DoubleSidedImage
                            className="h-[120px]"
                            src={'/img/thumbs/soccer/lagom-coach-and-soccer-team.png'}
                        />
                    </div>
                    <div className="text-center">
                        <h5 className="mb-1">Pelatihan</h5>
                        <div className='text-left'>
                            <span>Tim pelatih kami terdiri dari instruktur yang berpengalaman dan berdedikasi. Mereka akan membantu Anda meningkatkan keterampilan futsal Anda melalui latihan yang terstruktur dan dukungan penuh.</span>
                        </div>
                    </div>
                </Card>
                <Card onClick={() => { }}>
                    <div className="mb-4 flex justify-center">
                        <DoubleSidedImage
                            className="h-[120px]"
                            src={'/img/thumbs/soccer/casual-life-3d-joyful-boy-playing-football.png'}
                        />
                    </div>
                    <div className="text-center">
                        <h5 className="mb-1">Pola</h5>
                        <span> Kami menyediakan beragam pola latihan yang dirancang untuk membantu Anda mengembangkan keterampilan dan pemahaman taktis dalam bermain futsal</span>
                    </div>
                </Card>
                <Card onClick={() => { }}>
                    <div className="mb-4 flex justify-center">
                        <DoubleSidedImage
                            className="h-[120px]"
                            src={'/img/thumbs/soccer/lagom-strategic-plan-in-soccer.png'}
                        />
                    </div>
                    <div className="text-center">
                        <h5 className="mb-1">Teknik</h5>
                        <span>Kami menawarkan program yang dirancang khusus untuk meningkatkan keterampilan teknis Anda dalam bermain futsal. </span>
                    </div>
                </Card>
                <Card onClick={() => { }}>
                    <div className="mb-4 flex justify-center">
                        <DoubleSidedImage
                            className="h-[120px]"
                            src={'/img/thumbs/soccer/casual-life-3d-boy-standing-with-football-with-hand-on-hip.png'}
                        />
                    </div>
                    <div className="text-center">
                        <h5 className="mb-1">Full Game</h5>
                        <span>Latihan Full Game: Program ini dirancang khusus untuk membantu Anda mempersiapkan diri dalam menjalani pertandingan futsal penuh. Latihan dalam program ini mencakup aspek fisik, teknis, taktis, dan mental yang diperlukan dalam pertandingan sebenarnya. </span>
                    </div>
                </Card>
                <Card onClick={() => { }}>
                    <div className="mb-4 flex justify-center">
                        <DoubleSidedImage
                            className="h-[120px]"
                            src={'/img/thumbs/soccer/lagom-soccer-player-with-ball.png'}
                        />
                    </div>
                    <div className="text-center">
                        <h5 className="mb-1">Agility</h5>
                        <span>Agility kami didesain untuk membantu Anda menjadi pemain futsal yang komprehensif dengan kecepatan, ketangkasan, serta kemampuan mental yang unggul.</span>
                    </div>
                </Card>
            </div>

            <div className='mt-6'>
                <Card bodyClass="flex gap-4">
                    <DoubleSidedImage
                        className="h-[150px]"
                        src={'/img/thumbs/soccer/lagom-trainer.png'}
                    />
                    <div>
                        <span>
                            Bergabunglah dengan program pelatihan teknik futsal kami dan tingkatkan keterampilan Anda dengan dukungan para pelatih profesional. Daftar sekarang di website kami atau hubungi tim kami untuk informasi lebih lanjut. Siapkan diri Anda untuk menjadi pemain futsal yang handal dan unggul dalam teknik!
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Home