package com.mestra.vaga.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.mestra.vaga.domain.model.Vaga;
import com.mestra.vaga.domain.service.ScrappingVaga;

@RestController
@RequestMapping("/vagas")
public class VagaController {

	@Autowired
	private ScrappingVaga scrappingVaga;


	@GetMapping
	public StringBuilder findVagas(@RequestParam String pesquisa) throws JsonProcessingException {
		
		List<Vaga> vagas = scrappingVaga.findVagas(pesquisa);

		StringBuilder vagasBuilder = new StringBuilder();
		
		vagasBuilder.append("[");
		for (int i = 0; i < vagas.size(); i++) {
			vagasBuilder.append(vagas.get(i).toString());
			
			if (i == (vagas.size()-1)) {
				break;
			} else {
				vagasBuilder.append(",");
			}
			
		}
		vagasBuilder.append("]");

		return vagasBuilder;

	}

}
