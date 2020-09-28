package com.valterfi.canadaoneyearservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.valterfi.canadaoneyearservice.domain.Word;
import com.valterfi.canadaoneyearservice.dto.WordDTO;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {

	@Query(value = "select description as x, count(id) as value from word group by description", nativeQuery = true)
    List<WordDTO> list();

}
