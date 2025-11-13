import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Play } from "lucide-react";

const professores = [
  { nome: "Jardel Castro", materia: "Matemática", img: "/images/professor1.png" },
  { nome: "Bruna Raquel", materia: "Matemática", img: "/images/professora1.png" },
];

export default function AprendizagemPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % professores.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + professores.length) % professores.length);

  return (
    <div className="app-container">
      {/* Cabeçalho */}
      <header className="app-header">
        <img src="/images/eureka.png" alt="Logo SuperKV" className="header-logo"/>
        <Button variant="secondary">Login</Button>
      </header>

      <main className="app-main">
        {/* Seção Principal */}
        <section className="section-principal">
          <div className="section-content">
            <h2 className="section-title">Curso Online para ENEM e Vestibulares</h2>
            <p className="section-text">
              Empresas Especializadas e registradas desde 2020 com foco no Suporte à Aprendizagem Escolar e nas Avaliações Básicas.
            </p>
            <div className="section-buttons">
              <Button variant="default">Saiba Mais</Button>
              <Button variant="outline" className="button-outline">Vídeo Aula de Apresentação</Button>
            </div>
          </div>
          <img src="/images/professora.png" alt="Aluna" className="section-image" />
        </section>

        {/* Seção de Apoio Escolar */}
        <section className="section-apoio">
          <h3 className="section-subtitle">Apoio Escolar para Todas as Etapas da Educação!</h3>
          <p className="section-text-center">
            Oferecemos acompanhamento completo e de qualidade para todas as matérias, com foco em reforço e preparação para o ENEM. Nosso objetivo é fortalecer a trajetória do aluno, promover autonomia nos estudos e garantir o sucesso escolar.
          </p>
          <Button className="button-inscricao">Faça sua Inscrição</Button>
        </section>

    <section className="py-16 bg-blue-600 text-white text-center w-full">
      <h3 className="text-2xl font-bold mb-8">Professores</h3>

      <div className="carousel-container max-w-3xl mx-auto">
        <div className={`carousel-wrapper current-${current}`}>
          {professores.map((prof, index) => (
            <div key={index} className="carousel-slide flex justify-center">
              <Card className="w-60 bg-blue-700 border-none">
                <CardContent className="flex flex-col items-center py-6">
                  <img src={prof.img} alt={prof.nome} className="section-carrossel" /> 
                  <h4 className="font-semibold">{prof.nome}</h4>
                  <p>{prof.materia}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="carousel-button left-0">‹</button>
        <button onClick={nextSlide} className="carousel-button right-0">›</button>
      </div>
    </section>

        {/* Seção Vídeo */}
        <section className="section-video">
          <div className="video-wrapper">
            <Play className="video-play" />
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="app-footer">
        <p>© 2025 SuperKV - Todos os direitos reservados</p>
        <div className="footer-links">
          <img src="images/facebook.png"></img>
          <a href="#">Facebook</a>
          <img src="images/instagram.png"></img>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
