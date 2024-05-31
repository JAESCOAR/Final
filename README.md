*** Entrega numero 4 
-------------
* Dentro del backent estan
-Las carpetas Controller, Config, Model, Repository
-Las cuales tiene las estructuras de la Api rest
```Java
@WebMvcTest(GuitarController.class)
public class GuitarControllerTests {
    
    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext webApplicationContext;
    @MockBean
    private GuitarRepository guitarRepository;
    
    @BeforeEach
    public void setup() {
        this.mockMvc=MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void testGetAll() throws Exception{
        when(guitarRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(get("/api/guitars"))
            .andExpect(status().isOk())
            .andExpect(content().json("[]"));
        verify(guitarRepository,times(1)).findAll();
    }

    @Test
    public void testGetById() throws Exception{
        Guitar guitar=new Guitar();
        guitar.setId(1L);
        when(guitarRepository.findById(1L)).thenReturn(Optional.of(guitar));
        mockMvc.perform(get("/api/guitars/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(guitarRepository,times(1)).findById(1L);
    }

    @Test
    public void testCreateGuitar() throws Exception{
        Guitar guitar=new Guitar();
        guitar.setId(1L);
        when(guitarRepository.save(any(Guitar.class))).thenReturn(guitar);
        mockMvc.perform(post("/api/guitars")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"id\":null, \"brand\": null, \"model\": null, \"type\": null, \"price\": null, \"condition\": null}"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(guitarRepository,times(1)).save(any(Guitar.class));
    }

    @Test
    public void testUpdateGuitar() throws Exception{
        Guitar guitar=new Guitar();
        guitar.setId(1L);
        when(guitarRepository.findById(1L)).thenReturn(Optional.of(guitar));
        mockMvc.perform(put("/api/guitars")
        .contentType(MediaType.APPLICATION_JSON)
        .content("{\"id\":null, \"brand\": null, \"model\": null, \"type\": null, \"price\": null, \"condition\": null}"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1));
        verify(guitarRepository,times(1)).findById(1L);
    }

    @Test
    public void testDeleteGuitar() throws Exception{
        doNothing().when(guitarRepository).deleteById(1L);
        mockMvc.perform(delete("/api/guitars/1"))
            .andExpect(status().isOk());
        verify(guitarRepository, times(1)).deleteById(1L);
    }

}

```
------
*Esta es la ultima actualizacion sobre la api 
-En el front tenemos GuitarFrom.jsx, GuitarRow.jsx, GuitarTable.jsx y App.css
esto es muy resumidovpero en si esto seria el proyecto 

