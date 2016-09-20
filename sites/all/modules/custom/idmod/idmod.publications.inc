<?php

function idmod_publications_author($form, &$form_state, $arg1) {
  $form = array();
  $debug_url = $_GET['q'];
  
  $form['publications'] = array(
    '#type' => 'fieldset',
    '#prefix' => '<div class="team-menu-wrap page-content">',
    '#suffix' => '</div>',
  );
  
  $form['publications']['publications1'] = array(
    '#type' => 'item',
    '#markup' => '<ul class="level-3 inline" id="team">
   
                  <li class="publications-1" id="author">
                    <a href="/publications/author">Author</a>
                  </li>
                  
                  <li class="publications-1" id="date">
                    <a href="/publications/date">Date</a>
                  </li>                               
                  
                  <li class="publications-1" id="topic">
                    <a href="/publications/topic">Topic</a>
                  </li>
                </ul>',

    '#prefix' => '<div class="team-menu" style="clear: left">',
    '#suffix' => '</div>',
  );  
  
  //Array index is based in "PID", not "UID"
  $form['publications']['author'] = array(
    '#type' => 'select',
    '#options' => array(
      'all' => t('All'),
      '68' => t('Ben Althouse'),
      '84' => t('Atiye Alaeddini'),
      '9' => t('Basil Bayati'),
      '13' => t('Anna Bershteyn'),
      '16' => t('Caitlin Bever'),
      '3' => t('Guillaume Chabot-Couture'),
      '29' => t('Stewart Chang'),
      '8' => t('Philip Eckhoff'),
      '27' => t('Mike Famulare'),
      '60' => t('Jillian Gauld'),
      '24' => t('Jaline Geradin'),
      '22' => t('Hao Hu'),
      '7' => t('Dan Klein'),
      '23' => t('Hil Lyons'),
      '26' => t('Kevin McCarthy'),
      '81' => t('Joel Miller'),
      '70' => t('Milen Nikolov'),
      '66' => t('Andre Lin Ouedraogo'),
      '25' => t('Joshua Proctor'),
      '28' => t('Min Roh'),
      '69' => t('Christian Selinger'),
      '15' => t('Bradley Wagner'),
      '4' => t('Edward Wenger'), 
    ),
    
    '#ajax' => array(
      'callback' => 'idmod_publications_author_callback',
      'wrapper' => 'replace_view_div',
     ),    
    '#default_value' => NULL,
    '#required' => TRUE,
    '#prefix' => '<div class="level-3  level-3a inline hidden">',
    '#suffix' => '</div>',   
  );
    
  $form['publications']['publications3'] = array(
    '#type' => 'item',
    '#markup' => '<ul class="level-3  level-3b inline hidden" id="team-research">
                  <li id="2011">
                    <a href="/publications/date/2011">2011</a>
                  </li>
                  <li id="2012">
                    <a href="/publications/date/2012">2012</a>
                  </li>
                  <li id="2013">
                    <a href="/publications/date/2013">2013</a>
                  </li>
                  <li id="2014">
                    <a href="/publications/date/2014">2014</a>
                  </li>
                  <li id="2015">
                    <a href="/publications/date/2015">2015</a>
                  </li>
                  <li id="2016">
                    <a href="/publications/date/2016">2016</a>
                  </li>
                </ul>',

    '#prefix' => '<div class="team-menu" style="clear: left">',
    '#suffix' => '</div>',
  );
    
  $form['publications']['publications4'] = array(
    '#type' => 'item',
    '#markup' => '<ul class="level-3  level-3c inline hidden" id="team-research">
    
                  <li id="math">
                    <a href="/publications/topic/math">Applied Math</a>
                  </li>
                  
                  <li id="epidemiology">
                    <a href="/publications/topic/epidemiology">Epidemiology</a>
                  </li>  
    
                  <li id="hiv">
                    <a href="/publications/topic/hiv">HIV</a>
                  </li>
                  <li id="malaria">
                    <a href="/publications/topic/malaria">Malaria</a>
                  </li>

                  <li id="polio">
                    <a href="/publications/topic/polio">Polio</a>
                  </li>
                  <li id="tuberculosis">
                    <a href="/publications/topic/tuberculosis">Tuberculosis</a>
                  </li>	                    
                </ul>',

    '#prefix' => '<div class="team-menu" style="clear: left">',
    '#suffix' => '</div>',
  );
  // If the URL is ajax, we need to clear the URL so the "Author" page gets displayed.
  if ($_GET['q'] == 'system/ajax') {
    $arg1 = NULL;
  }
  if (!isset($form_state['triggering_element']['#value']) ||
      $form_state['triggering_element']['#value'] == 'all') {
    $display_id = 'page_all';
    $arg = NULL;
  }
  else {
    $display_id = 'dynamic';
    $arg = $form_state['triggering_element']['#value'];
  }
  
  if ($arg1 == 'hiv') {
    $display_id = 'hiv';
    $arg = NULL;
  }
  if ($arg1 == 'malaria') {
    $display_id = 'malaria';
    $arg = NULL;
  }
  
  //ToDo
  if ($arg1 == 'math') {
    $display_id = 'math';
    $arg = NULL;
  }
  if ($arg1 == 'epidemiology') {
    $display_id = 'epidemiology';
  }
  if ($arg1 == 'polio') {
    $display_id = 'polio';
    $arg = NULL;
  }  
  if ($arg1 == 'tuberculosis') {
    $display_id = 'tubercolosis';
    $arg = NULL;
  }
  if ($arg1 == '2011') {
    $display_id = '2011';
    $arg = NULL;
  }
  if ($arg1 == '2012') {
    $display_id = '2012';
    $arg = NULL;
  }
  if ($arg1 == '2013') {
    $display_id = '2013';
    $arg = NULL;
  }
  if ($arg1 == '2014') {
    $display_id = '2014';
    $arg = NULL;
  }
  if ($arg1 == '2015') {
    $display_id = '2015';
    $arg = NULL;
  }
  if ($arg1 == '2016') {
    $display_id = '2016';
    $arg = NULL;
  } 
  
  
  
  $view_name = 'publications';

  $view_output = views_embed_view($view_name, $display_id, $arg);
  $form['content'] = array(
    '#type' => 'item',
    '#markup' => $view_output,
    '#prefix' => '<div id="replace_view_div">',
    '#suffix' => '</div>',
  );

  return $form;
}

/*
 *  Callback for ajax reference for author filter
 */

function idmod_publications_author_callback($form, $form_state) {
  // Respond to click on author.
  
  $debug_form = $form;
  $debug_value = $form_state['triggering_element']['#value'];
  return $form['content'];
}