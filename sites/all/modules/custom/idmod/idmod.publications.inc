<?php


function idmod_publications_author($form, &$form_state) {
  $form = array();
  

  $form['publications'] = array(
    '#type' => 'fieldset',
    '#prefix' => '<div class="team-menu-wrap">',
    '#suffix' => '</div>',
  );  
  
  $form['publications']['author'] = array(
    '#type' => 'select',
    '#options' => array(
      'dan' => t('Dan Klein'),
      'pie' => t('Philip Eckhoff'),
      'anna' => t('Anna Berhteyn'),
      'alex' => t('Alexander Upfill-Brown'),
    ),
    '#default_value' => 'dan',
    '#required' => TRUE,
  );

  $form['publications']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Submit'),
  );
  
  $view_name = 'publications';
  $display_id = 'page_1';
  $view_output = views_embed_view($view_name, $display_id);
  
  $form['content'] = array(
    '#type' => 'item',
    '#markup' => $view_output  
  );

  return $form;
}